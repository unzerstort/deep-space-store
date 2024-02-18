export function searchZipCode(value) {
    let zipCode = value.replace(/\D/g, '');

    if (zipCode != "") {
        let validateZipCode = /^[0-9]{8}$/;
        
        return validateZipCode.test(zipCode);
    }

    return false;
};
