"use client";

import {
  ArrowLeft,
  UserRound,
  Calendar,
  Mail,
  MapPin,
  Phone,
  Users,
} from "lucide-react";
import Link from "next/link";

const BookingPage = () => {
  return (
    <main className="min-h-screen bg-gradient-to-br from-white to-orange-500/20 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <Link
            href="/"
            className="flex items-center gap-2 text-blue-500 hover:text-blue-500/80 transition-colors mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="font-medium">Back to Home</span>
          </Link>
          <h1 className="text-4xl font-bold text-gray-700 mb-2">
            Plan Your Adventure
          </h1>
          <p className="text-lg text-gray-placeholder-gray-400">
            Fill in your travel details and we&apos;ll help you find the perfect
            destination.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8 border border-gray-300">
          <form className="space-y-6">
            {/* Destination */}
            <div>
              <label
                htmlFor="destination"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <MapPin className="w-4 h-4 inline mr-2 text-blue-500" />
                Destination
              </label>
              <input
                type="text"
                id="destination"
                name="destination"
                placeholder="Where do you want to travel?"
                required
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-background text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              />
            </div>

            {/* Check-in & Check-out */}
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="checkIn"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <Calendar className="w-4 h-4 inline mr-2 text-blue-500" />
                  Check-in Date
                </label>
                <input
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-background text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
              <div>
                <label
                  htmlFor="checkOut"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  <Calendar className="w-4 h-4 inline mr-2 text-blue-500" />
                  Check-out Date
                </label>
                <input
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-background text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                />
              </div>
            </div>

            {/* Travelers */}
            <div>
              <label
                htmlFor="travelers"
                className="block text-sm font-semibold text-gray-700 mb-2"
              >
                <Users className="w-4 h-4 inline mr-2 text-blue-500" />
                Number of Travelers
              </label>
              <select
                id="travelers"
                name="travelers"
                className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-background text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Traveler" : "Travelers"}
                  </option>
                ))}
              </select>
            </div>

            {/* Personal Information */}
            <div className="border-t border-gray-300 pt-6">
              <h2 className="text-lg font-semibold text-gray-700 mb-4">
                Contact Information
              </h2>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <UserRound className="w-4 h-4 inline mr-2 text-blue-500" />
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-background text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Mail className="w-4 h-4 inline mr-2 text-blue-500" />
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-background text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>

                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    <Phone className="w-4 h-4 inline mr-2 text-blue-500" />
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 555 123 4567"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 bg-background text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-600/90 transition-colors duration-200"
            >
              Confirm Booking
            </button>
          </form>
        </div>

        {/* Info Box */}
        <div className="mt-8 bg-blue-400/10 border border-blue-400/30 rounded-lg p-6">
          <h3 className="font-semibold text-gray-700 mb-2">Have Questions?</h3>
          <p className="text-gray-600">
            Contact our travel team at{" "}
            <span className="text-blue-400 font-medium mr-1">
              info@wanderlust.com
            </span>
          </p>
        </div>
      </div>
    </main>
  );
};

export default BookingPage;
