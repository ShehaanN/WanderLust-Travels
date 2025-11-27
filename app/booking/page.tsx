"use client";

import { z } from "zod";
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
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const bookingSchema = z
  .object({
    destination: z.string().min(2, "Destination is required"),
    checkIn: z.string().min(1, "Check-in date is required"),
    checkOut: z.string().min(1, "Check-out date is required"),
    travelers: z.number().min(1, "At least one traveler is required"),
    name: z.string().min(2, "Name is required"),
    email: z.string().email("Please enter a valid email address"),
    phone: z.string().min(7, "Phone number is required"),
  })
  .refine(
    (data) => {
      const checkInDate = new Date(data.checkIn);
      const checkOutDate = new Date(data.checkOut);
      return checkOutDate > checkInDate;
    },
    {
      message: "Check-out date must be after check-in date",
      path: ["checkOut"],
    }
  );

const BookingPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
  } = useForm<z.infer<typeof bookingSchema>>({
    resolver: zodResolver(bookingSchema),
    defaultValues: { travelers: 1 },
  });

  const onSubmit = (data: z.infer<typeof bookingSchema>) => {
    try {
      console.log("Form data:", data);
      alert("Booking submitted successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Error submitting booking. Please try again.");
    }
  };

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
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
                {...register("destination")}
                type="text"
                id="destination"
                name="destination"
                placeholder="Where do you want to travel?"
                className={`w-full px-4 py-3 rounded-lg border bg-background text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.destination ? "border-red-500" : "border-gray-300"
                }`}
              />
              {errors.destination && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.destination.message}
                </p>
              )}
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
                  {...register("checkIn")}
                  type="date"
                  id="checkIn"
                  name="checkIn"
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.checkIn ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.checkIn && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.checkIn.message}
                  </p>
                )}
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
                  {...register("checkOut")}
                  type="date"
                  id="checkOut"
                  name="checkOut"
                  className={`w-full px-4 py-3 rounded-lg border bg-background text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                    errors.checkOut ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.checkOut && (
                  <p className="mt-1 text-sm text-red-600">
                    {errors.checkOut.message}
                  </p>
                )}
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
                {...register("travelers", { valueAsNumber: true })}
                id="travelers"
                name="travelers"
                className={`w-full px-4 py-3 rounded-lg border bg-background text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                  errors.travelers ? "border-red-500" : "border-gray-300"
                }`}
              >
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                  <option key={num} value={num}>
                    {num} {num === 1 ? "Traveler" : "Travelers"}
                  </option>
                ))}
              </select>
              {errors.travelers && (
                <p className="mt-1 text-sm text-red-600">
                  {errors.travelers.message}
                </p>
              )}
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
                    {...register("name")}
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your full name"
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.name.message}
                    </p>
                  )}
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
                    {...register("email")}
                    type="email"
                    id="email"
                    name="email"
                    placeholder="your@email.com"
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.email.message}
                    </p>
                  )}
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
                    {...register("phone")}
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="+1 555 123 4567"
                    className={`w-full px-4 py-3 rounded-lg border bg-background text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {errors.phone && (
                    <p className="mt-1 text-sm text-red-600">
                      {errors.phone.message}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-600/90 transition-colors duration-200"
            >
              {isSubmitting ? "Submitting..." : "Confirm Booking"}
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
