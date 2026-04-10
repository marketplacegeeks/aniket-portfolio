"use client";

import { useState } from "react";
import { X, Download, Loader2 } from "lucide-react";

type DownloadModalProps = {
  isOpen: boolean;
  onClose: () => void;
  downloadType: "cv" | "portfolio";
  onSuccess: () => void;
};

export default function DownloadModal({
  isOpen,
  onClose,
  downloadType,
  onSuccess,
}: DownloadModalProps) {
  const [email, setEmail] = useState("");
  const [purpose, setPurpose] = useState("");
  const [remarks, setRemarks] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/track-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          purpose,
          remarks,
          downloadType,
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to process request");
      }

      // Success - trigger download
      onSuccess();
      onClose();
      setEmail("");
      setPurpose("");
      setRemarks("");
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-md w-full p-6 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="mb-6">
          <div className="bg-[#EEF2EE] rounded-lg p-3 w-fit mb-4">
            <Download className="w-6 h-6 text-[#2D7B69]" />
          </div>
          <h2 className="font-[family-name:var(--font-playfair)] text-2xl font-bold text-[#1A1A1A] mb-2">
            Download {downloadType === "cv" ? "CV" : "Portfolio"}
          </h2>
          <p className="text-[#6B7A72] text-sm">
            Just let me know who you are and why you&apos;re interested. I&apos;ll send you the file right away.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-semibold text-[#1A1A1A] mb-2"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7B69] focus:border-transparent"
            />
          </div>

          <div>
            <label
              htmlFor="purpose"
              className="block text-sm font-semibold text-[#1A1A1A] mb-2"
            >
              What brings you here?
            </label>
            <select
              id="purpose"
              required
              value={purpose}
              onChange={(e) => setPurpose(e.target.value)}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7B69] focus:border-transparent"
            >
              <option value="">Select a reason...</option>
              <option value="Hiring for a role">Hiring for a role</option>
              <option value="Exploring collaboration">Exploring collaboration</option>
              <option value="Investment opportunity">Investment opportunity</option>
              <option value="Learning from your work">Learning from your work</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="remarks"
              className="block text-sm font-semibold text-[#1A1A1A] mb-2"
            >
              Remarks <span className="text-[#9CA3AF] font-normal">(Optional)</span>
            </label>
            <textarea
              id="remarks"
              value={remarks}
              onChange={(e) => setRemarks(e.target.value)}
              placeholder="Anything else you'd like to share..."
              rows={3}
              className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#2D7B69] focus:border-transparent resize-none"
            />
          </div>

          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full px-6 py-3 bg-[#2D7B69] text-white font-semibold rounded-lg hover:bg-[#236152] transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                <Download className="w-4 h-4" />
                Download {downloadType === "cv" ? "CV" : "Portfolio"}
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
