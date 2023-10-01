import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(
          request: Request,
          {params}: {params: {id: string}}
) {
          const id = params.id
          const calledStudent = await prisma.student.findUnique({
                    where: {
                              id,
                    }
          })
          if(!calledStudent){
                    return new NextResponse("No student found")
          }
        return NextResponse.json(calledStudent)
}

export async function PATCH(
          request: Request,
          {params}: {params: { id: string }}
){
       const id = params.id
       let newUpdates = await request.json()


       const  updated_student = await prisma.student.update({
        where: { id },
        data: newUpdates
       })

       if(!updated_student){
          return new NextResponse("Student not Found")
       }

       return NextResponse.json(updated_student)
}

export async function DELETE(
     request: Request,
     {params}: {params: {id: string}}
){
          try{
                    const id = params.id;
                    await prisma.student.delete({
                              where: { id },
                    })
                    return new NextResponse("User successfully deleted")
          } catch(error){
              return NextResponse.json(error)
          }
}
