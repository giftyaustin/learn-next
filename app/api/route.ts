import { NextResponse } from "next/server";

export const GET=()=> {
    console.log('api works')
    return NextResponse.json({message:'api working'})
}