'use server';

import { z } from "zod";
import { sql, db } from '@vercel/postgres';
import { revalidatePath } from 'next/cache';
import { redirect } from "next/navigation";

const client = await db.connect();
const FormSchema = z.object({
  id: z.string(),
  customerId: z.string(),
  amount: z.coerce.number(),
  status: z.enum(['pending', 'paid']),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
// Use Zod to update the expected types
const UpdateInvoice = FormSchema.omit({ id: true, date: true })

export async function createInvoice(formData: FormData) {
  const { customerId, amount, status } = CreateInvoice.parse ({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status'),
  });
  const amountInCents = amount * 100;
  const date = new Date().toISOString().split('T')[0];

  console.log(customerId+' '+date+' '+amount);

  try {
    await client.sql`
    INSERT INTO invoices (customer_id, amount, status, date)
    VALUES (${customerId}, ${amountInCents}, ${status}, ${date})
  `;
  } catch(error) {
    // console.error('Database Error:', error);
    return { message: 'Databse error: Failed to create invoice.'};
  }
//   const rawFormData = Object.fromEntries(formData.entries());
//   console.log(rawFormData);
  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');
}

export async function updateInvoice(id: string, formData: FormData) {
    const { customerId, amount, status } = UpdateInvoice.parse({
      customerId: formData.get('customerId'),
      amount: formData.get('amount'),
      status: formData.get('status'),
    });
   
    const amountInCents = amount * 100;
   
    try{
        await client.sql`
        UPDATE invoices
        SET customer_id = ${customerId}, amount = ${amountInCents}, status = ${status}
        WHERE id = ${id}
      `;

    } catch(error) {
      return { message: 'Database error: Failed to update invoice' };
      
    }
   
    revalidatePath('/dashboard/invoices');
    redirect('/dashboard/invoices');
  }

  export async function deleteInvoice(id: string) {
    // throw new Error('Failed to Delete Invoice');

    try {
      await client.sql`DELETE FROM invoices WHERE id = ${id}`;
      return { message: 'Deleted Invoice.' };
    } catch(error) {
        return { message: 'Database error: Failed to delete invoice.'};
    }
    revalidatePath('/dashboard/invoices');
  }