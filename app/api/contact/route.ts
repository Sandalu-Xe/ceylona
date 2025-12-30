import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'Name, email, and message are required.' },
                { status: 400 }
            );
        }

        // Path to the simulated database file
        const dataDir = path.join(process.cwd(), 'data');
        const filePath = path.join(dataDir, 'messages.json');

        // Ensure data directory exists
        if (!fs.existsSync(dataDir)) {
            fs.mkdirSync(dataDir, { recursive: true });
        }

        // Read existing messages
        let messages = [];
        if (fs.existsSync(filePath)) {
            const fileContent = fs.readFileSync(filePath, 'utf-8');
            try {
                messages = JSON.parse(fileContent);
            } catch (e) {
                messages = [];
            }
        }

        // Add new message with timestamp
        const newMessage = {
            id: Date.now().toString(),
            name,
            email,
            message,
            createdAt: new Date().toISOString(),
        };

        messages.push(newMessage);

        // Save back to file
        fs.writeFileSync(filePath, JSON.stringify(messages, null, 2));

        return NextResponse.json(
            { success: true, message: 'Message sent successfully!' },
            { status: 200 }
        );
    } catch (error) {
        console.error('Error saving message:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}
