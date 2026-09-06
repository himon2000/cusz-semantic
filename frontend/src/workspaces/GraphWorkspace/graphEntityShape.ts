import type { GraphEntityShapeVariant } from "./graphTheme";

export const ENTITY_SHAPE_ALIASES: Array<[GraphEntityShapeVariant, RegExp]> = [
  ["community", /\b(university)\b/i],
  ["entity", /\b(school)\b/i],
  ["biomolecule", /\b(person|faculty|teacher)\b/i],
  ["condition", /\b(academicfield|academic[_\s-]?field)\b/i],
  ["compound", /\b(researcharea|research[_\s-]?area)\b/i],
  ["process", /\b(program|programme)\b/i],
  ["biomolecule", /\b(gene|protein|enzyme|receptor|target|transcript|rna|dna|mirna|biomolecule|peptide)\b/i],
  ["condition", /\b(disease|condition|phenotype|symptom|disorder|syndrome|diagnosis|pathology|trait)\b/i],
  ["compound", /\b(drug|chemical|compound|metabolite|molecule|small[_\s-]?molecule|ligand|therapeutic|medication|substance)\b/i],
  ["process", /\b(pathway|process|mechanism|function|ontology|biological[_\s-]?process|cellular[_\s-]?process|module)\b/i],
];

export function classifyEntityShape(
  nodeType?: string,
  semanticGroup?: string,
  content?: string,
  properties?: Record<string, unknown>,
): GraphEntityShapeVariant {
  const values = [
    nodeType,
    semanticGroup,
    content,
    String(properties?.type ?? ""),
    String(properties?.category ?? ""),
    String(properties?.label ?? ""),
  ]
    .filter((value) => typeof value === "string" && value.trim().length > 0)
    .join(" ");

  for (const [shape, pattern] of ENTITY_SHAPE_ALIASES) {
    if (pattern.test(values)) {
      return shape;
    }
  }

  return "entity";
}
