import PostApi from "@/app/types/PostApi";
import { NextResponse } from "next/server";

const posts: PostApi[] = Array.from({ length: 30 }).map((_, index) => {
    return {
      id: index + 1,
      title: `Post title ${index}`,
      body: `Post body ${index}`,
    }})

export function GET(){

    return NextResponse.json({message:"api get all users",posts})
}
export function POST(){
    return NextResponse.json({message:"api post"})
}
export function PUT(){
    return NextResponse.json({message:"api put"})
}
export function DELETE(){
    return NextResponse.json({message:"api delete"})
}