export interface Provider {
  name: string;
  image: string;
}

export interface Category {
  name: string;
  providers: Provider[];
} 