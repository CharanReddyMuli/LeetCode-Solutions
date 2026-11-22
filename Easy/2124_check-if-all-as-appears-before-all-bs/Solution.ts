function checkString(s: string): boolean {
    let is_b = false;
    for (let i = 0; i < s.length; i++) {
        let ch = s.charAt(i);
        if (ch === 'b') {
            is_b = true;
        }
        if (ch === 'a' && is_b) {
            return false;
        }
    }
    return true;
}