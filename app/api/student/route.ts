import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";
import { request } from "http";


export async function GET(){
          const data = await prisma.student.findMany();
          return NextResponse.json(data)
}

export async function POST(request: Request) {
         try{
          const newData = await request.json()

          const newStudent = await prisma.student.create({
                    data: newData,
          })
          return new NextResponse(JSON.stringify(newData), {
                    status: 201,
                    headers: {"Content Type": "application/json"},
          })
         }
         catch(error){
             return  NextResponse.json({error: error}, {status: 500})
         }
}