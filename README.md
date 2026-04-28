<div align="center">

## <a name="features">🔋 Features</a>

👉 **PDF Upload & Ingestion**: Seamlessly upload PDF books with automated text extraction, intelligent chunking, and high-dimensional embeddings for precise context retrieval.

👉 **Voice-First Conversations**: Engage in natural, real-time voice dialogues with your uploaded books, allowing you to ask questions or explore complex concepts verbally via Vapi.

👉 **AI Voice Personas**: Choose from a variety of distinct AI personalities and hear instant high-fidelity previews powered by ElevenLabs to find the perfect reading companion.

👉 **Smart Summaries & Insights**: Quickly extract the essence of any chapter or request deep-dive summaries, making long-form content more accessible and digestible.

👉 **Session Transcripts**: Keep a complete record of every vocal interaction with auto-generated text transcripts, ensuring you never lose a key insight from your discussions.

👉 **Library Management**: Effortlessly organize and search through your personal uploads or the global collection with a high-performance search interface.

👉 **Auth & Subscription**: Secure user access via email and social login, paired with a robust billing system to manage premium features and platform subscriptions.

And many more, including code architecture and reusability.

```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=

# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/

# VERCEL BLOB
BLOB_READ_WRITE_TOKEN=

# MONGODB
MONGODB_URI=

# VAPI
NEXT_PUBLIC_VAPI_API_KEY=
NEXT_PUBLIC_ASSISTANT_ID=

# Google Gemini API for embeddings
GOOGLE_GEMINI_API_KEY=

# ELEVENLABS
ELEVENLABS_API_KEY=
```

Replace the placeholder values with your real credentials. You can get these by signing up at: [**Clerk**](https://clerk.com), [**Vercel**](https://vercel.com), [**MongoDB**](https://www.mongodb.com), [**Vapi**](https://vapi.ai), [**Google AI Studio**](https://aistudio.google.com), [**ElevenLabs**](https://elevenlabs.io).

**Running the Project**

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.
