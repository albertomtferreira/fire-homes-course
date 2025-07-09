import { Chokokutai } from "next/font/google";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest)=>{
    const path = request.nextUrl.searchParams.get("redirect")

    if (!path){
        return NextResponse.redirect(new URL("/", request.url))
    }

    const cookieStore = await cookies()
    const refreshToken = cookieStore.get("firebaseAuthRefreshToken")?.value

    if(!refreshToken){
        return NextResponse.redirect(new)
    }

    try{}
    catch{
        
    }
}