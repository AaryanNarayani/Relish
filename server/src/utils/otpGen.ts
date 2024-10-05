export const otpGen = (length: number) => {
    const charset = "0123456789";
    let otp = "";
    for (let i = 0; i < length; i++) {
        const random = Math.floor(Math.random() * charset.length);
        otp += charset[random];
    }
    return otp;
};
