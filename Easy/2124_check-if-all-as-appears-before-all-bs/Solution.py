class Solution:
    def checkString(self, s: str) -> bool:
        is_b = False
        for ch in s:
            if ch == 'b':
                is_b = True
            if ch == 'a' and is_b:
                return False
        return True