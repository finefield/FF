"use client"

import { useEffect, useRef } from "react"

export function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    const elements = node.querySelectorAll(".reveal, .reveal-stagger, .fade-in-up")
    elements.forEach((el) => observer.observe(el))

    return () => {
      elements.forEach((el) => observer.unobserve(el))
    }
  }, [])

  return ref
}

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible")
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    )

    const elements = node.querySelectorAll(".reveal, .reveal-stagger, .fade-in-up")
    elements.forEach((el) => observer.observe(el))
    observer.observe(node)

    return () => {
      elements.forEach((el) => observer.unobserve(el))
      observer.unobserve(node)
    }
  }, [])

  return ref
}
