public class Example(){

    public static void main(String[] args){
        int x=10;
        int b=10;

        //Expresión 1
        System.out.println(x++);
        /**Justificación: Primero se imprime la variable
         * y posteriormente se hace el incremento
         */
        x=10;
        b=10;
         //Expresión 2
        System.out.println(++x);
        /**Justificación: 
         */
        //https://grijalvaromero.dev/courses
        //Expresión 3
        int j=b++ * -3; //lado a
        int k=-3 % x++;//lado B
        boolean res == k; //comparación
        System.out.println(res);
        
        //Expresión #4 30 - 10 /= % ++b + 30 % 7 * 2
        int x=10;
        int b=10;
        double j=  30 - 10 ;// x/=10
        j/= ++b + (30 % 14);
        System.out.println(j);
        //Expresión #5
        //x =  -50 * x++ * 80 % b / 4 *=8  R= 0
        int x=10;
        int b=10;
        int j=(-50 * x++ * 80) % b / 4;
        j*=8;
        x=j;
        System.out.println(x); //   x= x/ 10
        //EXPRESIÓN 6 b*= x++ - 8 + 3 - 5 / 4 % - 3 + 8 R=120
        int x=10;
        int b=10;
        int j= x++ - 8 + 3 - (5 / 4) % - 3 + 8;
        b*=j;
        System.out.println(b); // 

    }

}