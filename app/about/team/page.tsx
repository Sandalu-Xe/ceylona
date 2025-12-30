import Image from "next/image";

export default function TeamPage() {
    const team = [
        {
            name: "Sahan Perera",
            role: "Founder & CEO",
            bio: "Visionary behind Ceylona Camps, with a passion for design and exploration.",
            image: "https://i.pravatar.cc/400?img=11"
        },
        {
            name: "Amara Silva",
            role: "Head of Experiences",
            bio: "Curating bespoke journeys that go beyond the ordinary.",
            image: "https://i.pravatar.cc/400?img=5"
        },
        {
            name: "Kasun De Alwis",
            role: "Lead Guide",
            bio: "An encyclopedia of Sri Lankan wildlife and history.",
            image: "https://i.pravatar.cc/400?img=3"
        },
        {
            name: "Nimali Fernando",
            role: "Sustainability Director",
            bio: "Ensuring our footprint helps nature thrive.",
            image: "https://i.pravatar.cc/400?img=9"
        },
        {
            name: "David Ross",
            role: "Head of Operations",
            bio: "Making sure every detail of your trip is flawless.",
            image: "https://i.pravatar.cc/400?img=60"
        },
        {
            name: "Sarah Jen",
            role: "Customer Success",
            bio: "Here to help you plan the perfect getaway.",
            image: "https://i.pravatar.cc/400?img=44"
        },
    ];

    return (
        <main className="min-h-screen bg-background pt-24 pb-16 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <div className="text-center space-y-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-foreground">Meet the Team</h1>
                    <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                        The passionate individuals dedicated to crafting your perfect Sri Lankan adventure.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {team.map((member, index) => (
                        <div
                            key={index}
                            className="group p-8 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-primary/50 transition-all hover:bg-black/10 dark:hover:bg-white/10 text-center"
                        >
                            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-primary/20 group-hover:border-primary transition-all group-hover:scale-105">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <h3 className="text-2xl font-semibold text-foreground mb-2">{member.name}</h3>
                            <p className="text-primary font-medium mb-4">{member.role}</p>
                            <p className="text-muted-foreground">{member.bio}</p>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
}
