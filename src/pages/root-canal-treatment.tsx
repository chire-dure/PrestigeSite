import { createRoot } from 'react-dom/client';
import { ServicePageLayout } from '../components/ServicePageLayout';
import { DENTAL_SERVICES } from '../data/servicesData';
import '../index.css';

const service = DENTAL_SERVICES['root-canal-treatment'];

createRoot(document.getElementById('root')!).render(
  <ServicePageLayout service={service} />
);
