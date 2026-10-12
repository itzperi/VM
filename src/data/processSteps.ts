// The four order steps shown on /process, shared with the HowTo JSON-LD in
// routes.ts so the visible steps and the schema never drift apart.
export interface ProcessStep {
  step: string;
  title: string;
  desc: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: '01',
    title: 'Choose',
    desc: 'Pick the format and size that matches your product from our catalogue, and receive an itemised ex-GST quote for your volume.',
  },
  {
    step: '02',
    title: 'Sample',
    desc: 'Approve a physical sample before any bulk production begins, so fit, strength and print are confirmed with no surprises at scale.',
  },
  {
    step: '03',
    title: 'Produce',
    desc: 'Your bulk run is made with quality checks at the raw material, production and pre-dispatch stages.',
  },
  {
    step: '04',
    title: 'Ship',
    desc: 'Packed and dispatched on schedule from Thiruvottiyur, Chennai, sized for your courier, road transport or ocean freight partner.',
  },
];
