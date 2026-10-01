"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface OpenModalOptions {
  title?: string;
  ctaSource?: string;
  preferredConfig?: string;
}

interface LeadModalContextType {
  isOpen: boolean;
  modalTitle: string;
  ctaSource: string;
  preferredConfig: string;
  openLeadModal: (options?: OpenModalOptions) => void;
  closeLeadModal: () => void;
}

const LeadModalContext = createContext<LeadModalContextType | undefined>(undefined);

export function LeadModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("Request Project Details");
  const [ctaSource, setCtaSource] = useState("General Enquiry");
  const [preferredConfig, setPreferredConfig] = useState("");

  const openLeadModal = (options?: OpenModalOptions) => {
    setModalTitle(options?.title || "Request Project Details");
    setCtaSource(options?.ctaSource || "Modal CTA");
    if (options?.preferredConfig) {
      setPreferredConfig(options.preferredConfig);
    }
    setIsOpen(true);
  };

  const closeLeadModal = () => {
    setIsOpen(false);
  };

  return (
    <LeadModalContext.Provider
      value={{
        isOpen,
        modalTitle,
        ctaSource,
        preferredConfig,
        openLeadModal,
        closeLeadModal,
      }}
    >
      {children}
    </LeadModalContext.Provider>
  );
}

export function useLeadModal() {
  const context = useContext(LeadModalContext);
  if (!context) {
    throw new Error("useLeadModal must be used within a LeadModalProvider");
  }
  return context;
}
