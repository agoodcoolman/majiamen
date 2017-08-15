package api;

import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;
import java.util.List;

/**
 * Created by jin on 2017/8/15.
 */
public class CookieUtils {
    public static String getCookie() {
        return "";
    }

    public static void saveCookie(List<String> cookies) {
        try {
            File cookie = new File("cookie");
            if (!cookie.exists())
                cookie.createNewFile();
            PrintWriter printWriter = new PrintWriter(new FileWriter(cookie));
            Iterator<String> iterator = cookies.iterator();
            while (iterator.hasNext()) {
                printWriter.write(iterator.next());
                printWriter.flush();
            }
            printWriter.close();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
