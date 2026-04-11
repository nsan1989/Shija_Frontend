import { faqResponses } from "./faqData";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type",
};

export default {
  async fetch(request) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: corsHeaders,
      });
    }

    if (request.method === "GET") {
      return new Response("FAQ Chatbot Worker Running", {
        headers: corsHeaders,
      });
    }

    if (request.method !== "POST") {
      return new Response("Method Not Allowed", {
        status: 405,
        headers: corsHeaders,
      });
    }

    try {
      const { message } = await request.json();
      const text = message.toLowerCase();

      let reply = "Sorry, I couldn't understand your query.";

      for (const faq of faqResponses) {
        if (faq.keywords.some(keyword => text.includes(keyword))) {
          reply = faq.reply;
          break;
        }
      }

      return Response.json(
        { reply },
        {
          headers: corsHeaders,
        }
      );

    } catch (error) {
      return Response.json(
        {
          error: "Internal Server Error",
        },
        {
          status: 500,
          headers: corsHeaders,
        }
      );
    }
  },
};