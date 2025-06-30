import {NextResponse} from "next/server";

export async function GET(){
    const response = await fetch('https://dogapi.dog/api/v2/facts'); //parses the data from the API
    const data = await response.json(); //converts the response to JSON format object 
    
      const fact = data?.data?.[0]?.attributes?.body || "No data found";
    return NextResponse.json(fact);

}