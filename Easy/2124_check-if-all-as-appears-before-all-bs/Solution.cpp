#include <string>

class Solution {
public:
    bool checkString(std::string s) {
        bool is_b = false;
        for (char ch : s) {
            if (ch == 'b') {
                is_b = true;
            }
            if (ch == 'a' && is_b) {
                return false;
            }
        }
        return true;
    }
};