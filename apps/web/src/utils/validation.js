export const isValidSAID = (idNumber) => {
    // Must be exactly 13 digits
    return /^\d{13}$/.test(idNumber);
};
export const isValidEmail = (email) => {
    // Basic email pattern
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};
export const isValidSAMobile = (mobile) => {
    // Strip all spaces
    const cleaned = mobile.replace(/\s/g, '');
    // Matches SA mobile formats: 0821234567 or +27821234567
    return /^(\+27|0)[6-8][0-9]{8}$/.test(cleaned);
};
