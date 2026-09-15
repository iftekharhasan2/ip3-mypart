import { SlideItem } from '../types';

/**
 * Seed slides ship with no stock artwork. `bgImage` and `videoUrl` are empty
 * until an administrator uploads media in /admin, and the slider renders
 * nothing rather than a default or a placeholder while they are unset.
 */

export const defaultSlides: SlideItem[] = [
  {
    id: 1,
    name: 'farm-genomics',
    title: 'Precision Agronomy & Living Field Laboratories',
    subtitle: 'Operating 1,200 contiguous hectares of living agricultural observatories, high-throughput phenotyping testbeds, and climate-resilient cultivar trials.',
    bgImage: '',
    videoUrl: '',
    ctaText: 'Explore Field Stations',
  },
  {
    id: 2,
    name: 'soil-microbiome',
    title: 'Subterranean Soil Metagenomics & Carbon Flux',
    subtitle: 'Quantifying long-term carbon mineralization, active microbial biome health, and biochar matrix integration across multi-decade test plots.',
    bgImage: '',
    videoUrl: '',
    ctaText: 'View Soil Research',
  },
  {
    id: 3,
    name: 'agtech-robotics',
    title: 'Autonomous AgTech & Sensor-Grid Telemetry',
    subtitle: 'Deploying sub-surface IoT moisture arrays, multispectral drone diagnostics, and automated robotic micro-irrigation for yield optimization.',
    bgImage: '',
    videoUrl: '',
    ctaText: 'Discover AgTech Lab',
  },
  {
    id: 4,
    name: 'phenomics-greenhouse',
    title: 'Controlled-Environment Phenomics Glasshouses',
    subtitle: 'Accelerating non-GMO crop development and drought-resilient seed breeding in hyper-monitored computational research greenhouses.',
    bgImage: '',
    videoUrl: '',
    ctaText: 'Greenhouse Trials',
  },
  {
    id: 5,
    name: 'bio-circular',
    title: 'Regenerative Ecology & Bio-Circular Nutrients',
    subtitle: 'Pioneering closed-loop nitrogen and phosphorus recovery, indigenous pollinator bio-corridors, and zero-leaching watershed management.',
    bgImage: '',
    videoUrl: '',
    ctaText: 'Ecosystem Studies',
  },
  {
    id: 6,
    name: 'field-trials',
    title: 'Institutional Trials & Agronomic Advisory',
    subtitle: 'Collaborating with multilateral research bodies, universities, and growers to translate verified field trial data into scalable agricultural impact.',
    bgImage: '',
    videoUrl: '',
    ctaText: 'Partner With Farm',
  },
  {
    id: 7,
    name: 'data-station',
    title: 'Open Agronomic Data & Station Access',
    subtitle: 'Access live microclimate telemetry, open-source crop growth models, and schedule high-level delegation visits to our research station.',
    bgImage: '',
    videoUrl: '',
    ctaText: 'Request Station Visit',
  }
];
