export interface StructuredPartner {
  who: string;
  relationshipType: string;
  whyItMatters: string;
  areasOfCooperation: string[];
  areasOfCompetition?: string[];
  dependencies?: string[];
  strategicSignificance: string;
  source: string;
}

export interface StructuredCompetitor {
  who: string;
  competitionType: string;
  areasOfCompetition: string[];
  whyItMatters: string;
  source: string;
}

export interface ThreeLayerAnswer {
  questionId: string;
  question: string;
  simpleAnswer: string; // Layer 1: Everyday human language (1-2 sentences)
  whyItMatters: string; // Layer 2: Geopolitical significance
  deeperDetails: {      // Layer 3: Supporting facts, metrics, sources, and structured relations
    facts: string[];
    partners?: StructuredPartner[];
    competitors?: StructuredCompetitor[];
    metrics?: Record<string, string | number>;
    sources?: string[];
  };
}

export interface CountrySimpleQuestionsDossier {
  countryId: string;
  countryName: string;
  tagline: string;
  questions: ThreeLayerAnswer[];
}
