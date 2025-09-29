'use client';

import { Button } from "@/components/ui/button";
import { ArrowLeft, Clock, MapPin, Phone, Users } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function StoryPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="relative z-50 bg-primary/95 backdrop-blur-sm border-b-4 border-italian-gold">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 text-primary-foreground hover:text-italian-gold transition-colors">
              <ArrowLeft className="w-5 h-5" />
              <span className="font-italian-body">Back to Home</span>
            </Link>
            <div className="flex items-center gap-4">
              <Image
                src="/generated/moms-spaghetti-logo.png"
                alt="Mom's Spaghetti"
                width={50}
                height={50}
                className="rounded-full"
              />
              <div>
                <h1 className="font-italian-display text-xl text-primary-foreground">
                  Mom's Spaghetti
                </h1>
                <p className="font-italian-body text-sm text-primary-foreground/80">
                  Our Story
                </p>
              </div>
            </div>
            <div className="w-20"></div>
          </div>
        </div>
      </header>

      {/* Story Hero */}
      <section className="relative py-20 px-4 hero-italian">
        <div className="absolute inset-0">
          <Image
            src="/generated/hero-background-kitchen.jpg"
            alt="Italian Kitchen"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-accent/90"></div>
        </div>

        <div className="relative z-10 container mx-auto max-w-4xl text-center text-white">
          <h1 className="font-italian-display text-5xl md:text-6xl font-bold mb-6">
            Our <span className="text-italian-gold">Story</span>
          </h1>
          <p className="font-italian-body text-xl mb-8">
            Three generations of authentic Italian tradition, served with love since 1950
          </p>
        </div>
      </section>

      {/* Family Story */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="font-italian-display text-4xl font-bold text-primary mb-6">
              The Heart of Little Italy
            </h2>
          </div>

          <div className="space-y-16">
            <div className="italian-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-italian-gold rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-italian-burgundy" />
                </div>
                <h3 className="font-italian-heading text-2xl font-bold text-primary">
                  The Beginning (1950)
                </h3>
              </div>
              <p className="font-italian-body text-lg text-muted-foreground leading-relaxed">
                It all started with Nonna Maria, who immigrated from Sicily with nothing but her family recipes and an unshakeable belief in the power of good food to bring people together. She opened Mom's Spaghetti in a tiny storefront on Mulberry Street with just $200 and a dream to share her authentic Italian heritage with New York.
              </p>
            </div>

            <div className="italian-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-italian-gold rounded-full flex items-center justify-center">
                  <Clock className="w-6 h-6 text-italian-burgundy" />
                </div>
                <h3 className="font-italian-heading text-2xl font-bold text-primary">
                  Growing Traditions (1970s-1990s)
                </h3>
              </div>
              <p className="font-italian-body text-lg text-muted-foreground leading-relaxed">
                As the years passed, Nonna Maria's children took over the restaurant, expanding the menu while staying true to the original recipes. They added the famous wood-fired pizza oven and began making fresh pasta daily. The restaurant became a cornerstone of the Little Italy community, hosting countless family celebrations and first dates.
              </p>
            </div>

            <div className="italian-card p-8 rounded-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-italian-gold rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-italian-burgundy" />
                </div>
                <h3 className="font-italian-heading text-2xl font-bold text-primary">
                  Today's Legacy
                </h3>
              </div>
              <p className="font-italian-body text-lg text-muted-foreground leading-relaxed">
                Now run by the third generation, Mom's Spaghetti continues to honor Nonna Maria's vision. We still use her original recipes, still make everything fresh daily, and still believe that a great meal shared with loved ones is one of life's greatest pleasures. Come taste the difference that three generations of love and tradition make.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Restaurant Info */}
      <section className="py-20 px-4 bg-muted/50">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-italian-display text-4xl font-bold text-primary mb-6">
              Visit Us Today
            </h2>
            <p className="font-italian-body text-xl text-muted-foreground">
              Located in the heart of historic Little Italy
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="italian-card p-8 text-center rounded-2xl">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="w-8 h-8 text-italian-burgundy" />
              </div>
              <h3 className="font-italian-heading text-xl font-bold text-primary mb-4">
                Location
              </h3>
              <div className="font-italian-body text-muted-foreground space-y-2">
                <p>123 Little Italy Street</p>
                <p>New York, NY 10013</p>
                <p>Between Mulberry & Mott</p>
              </div>
            </div>

            <div className="italian-card p-8 text-center rounded-2xl">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-italian-burgundy" />
              </div>
              <h3 className="font-italian-heading text-xl font-bold text-primary mb-4">
                Hours
              </h3>
              <div className="font-italian-body text-muted-foreground space-y-2">
                <p>Monday - Thursday: 11am - 10pm</p>
                <p>Friday - Saturday: 11am - 11pm</p>
                <p>Sunday: 12pm - 9pm</p>
              </div>
            </div>

            <div className="italian-card p-8 text-center rounded-2xl">
              <div className="w-16 h-16 bg-italian-gold rounded-full flex items-center justify-center mx-auto mb-6">
                <Phone className="w-8 h-8 text-italian-burgundy" />
              </div>
              <h3 className="font-italian-heading text-xl font-bold text-primary mb-4">
                Contact
              </h3>
              <div className="font-italian-body text-muted-foreground space-y-2">
                <p>(555) 123-PASTA</p>
                <p>info@momsspaghetti.com</p>
                <p>Reservations Welcome</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-italian-display text-4xl font-bold mb-6">
            Become Part of Our Story
          </h2>
          <p className="font-italian-body text-xl mb-8">
            Join three generations of satisfied customers and create your own memories at Mom's Spaghetti
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link href="/menu">
              <Button size="lg" className="bg-italian-gold text-italian-burgundy hover:bg-secondary font-italian-body">
                View Our Menu
              </Button>
            </Link>
            <Button variant="outline" size="lg" className="border-2 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary font-italian-body">
              Make Reservation
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t-4 border-italian-gold py-12 px-4">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <Image
              src="/generated/moms-spaghetti-logo.png"
              alt="Mom's Spaghetti"
              width={40}
              height={40}
              className="rounded-full"
            />
            <h3 className="font-italian-display text-xl text-primary">
              Mom's Spaghetti
            </h3>
          </div>
          <p className="font-italian-body text-muted-foreground mb-4">
            Three generations of authentic Italian cuisine
          </p>
          <p className="font-italian-body text-muted-foreground">
            © 2024 Mom's Spaghetti. All rights reserved. | Made with ❤️ in Little Italy
          </p>
        </div>
      </footer>
    </div>
  );
}