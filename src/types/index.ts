export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  serviceArea: string;
  propertyType: string;
  linearFootage: string;
  timeline?: string;
  hearAboutUs?: string;
  message: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface ServiceArea {
  id: string;
  name: string;
  description: string;
}
