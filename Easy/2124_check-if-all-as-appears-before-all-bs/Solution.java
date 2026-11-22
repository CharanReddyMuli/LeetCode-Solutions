class Solution {
    public boolean checkString(String s) {
        
        boolean is_b = false; 
        
        for (int i = 0; i < s.length(); i++){
            char ch = s.charAt(i);
            
            if (ch == 'b'){
                is_b = true;
            }

            if (ch == 'a' && is_b == true){
                return false;
            }
        }

        return true;
    }
}