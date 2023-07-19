export interface Card {
    _id: string;
    name?: string;
    title: string;
    phone: string;
    email?: string;
    address?: string;
    userId?: string; // backend bitince zorunlu yap
}
// ? zorunlu olmayan demek
