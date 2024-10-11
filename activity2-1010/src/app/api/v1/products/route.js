import { NextResponse } from "next/server";
import data from 'activity2/mocks/data.json';

export async function GET() {
    return NextResponse.json(data);
}