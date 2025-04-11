"use client";
import { title } from "@/components/primitives";
import { useState } from "react";

export default function aboutMePage() {
let facts: string[] = ["Honey never spoils",]
const [fact, setFact] = useState("");
  return (
    <div>
      <h1 className={title()}>aboutMe</h1>
      <h1> My name is Tulasi Chandaka, and I am 16 years old! </h1>
      <p> I love to paint and try new artistic styles.</p>
      <a href="https://www.thecollector.com/van-gogh-paintings-you-should-know/">Van Gogh is my favorite renaissance artist!</a>


      <p> Cooking and baking always helps me relieve my stress after a long day.</p>
      <p> I love trying new pasta recipes and making pasta from scrathc. I usually take all my random ingredients, blend them up, and eat a tasty dinner from scratch.</p>
      <img src="https://www.allrecipes.com/thmb/nO3iistRRBHuMCz1Gr_0XuMGaWg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/ALR-8513545-penne-alla-vodka-VAT-hero-4x3-2-4a53c968c3d94a32816f01f5793702ce.jpg"  width="500" height="600"/>


      <p> When I grow up, I want to be a clinical psychiatrist.</p>
      <a className="" href="https://www.openculture.com/2015/01/the-little-albert-experiment.html">Visit a study on the Little ALbert Experiment!</a>

    </div>
  );
}
