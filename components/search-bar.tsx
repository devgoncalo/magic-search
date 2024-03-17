"use client";

import { useRef, useState, useTransition } from "react";
import { useRouter } from "next/navigation";

import { Search, Loader2 } from "lucide-react";

import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isSearching, startTransition] = useTransition();
  const router = useRouter();

  const [query, setQuery] = useState<string>("");

  const search = () => {
    startTransition(() => {
      router.push(`/search?query=${query}`);
    });
  };

  return (
    <div className="relative w-full h-14 flex flex-col bg-white">
      <div className="relative h-14 z-10 rounded-md">
        <Input
          disabled={isSearching}
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
          ref={inputRef}
          onKeyDown={(e) => {
            if (e.key === "Escape") {
              inputRef.current?.blur();
            } else if (e.key === "Enter") {
              e.preventDefault();
              search();
              inputRef.current?.blur();
            }
          }}
          className="absolutr inset-0 h-full"
          placeholder="Search anything..."
        />

        <Button
          disabled={isSearching}
          onClick={search}
          size="sm"
          className="absolute inset-y-0 right-0 h-full rounded-l-none"
        >
          {isSearching ? (
            <Loader2 className="size-6 animate-spin" />
          ) : (
            <Search className="size-6" />
          )}
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
