import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { itemId: string } }
) {
  try {
    const { itemId } = params;
    const values = await req.json();

    if (!itemId) {
      return new NextResponse("Unauthorized", { status: 401 });
    }

    const element = await db.element.update({
      where: {
        id: itemId,
      },
      data: {
        ...values,
      },
    });

    return NextResponse.json(element);
  } catch (error) {
    console.log(error);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
