package api;

import java.io.*;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.Date;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

/**
 * Created by jin on 2017/8/15.
 *
 * 用于调用接口
 */
public class ApiUtils {
    public static final String HOST = "http://www.majiamen.com/";

    public static final String LOGIN = "login.php";


    public static final String CODE = "ck.php";



    /**
     *
     * @param username
     * @param password
     * @param questionType
     * @param securityQuestion
     * @param answer
     * @param gdcode 验证码  http://www.majiamen.com/ck.php?nowtime=65116  当前时间的秒数
     */
    public void login(String username, String password, String questionType, String securityQuestion, String answer, String gdcode) {
        String url = null;
        try {
            url = URLEncoder.encode(HOST+ LOGIN, "gbk");
            String data = "forward=&jumpurl="+ url+"&step=2&lgt=0&pwuser="+ username+"&pwpwd="+password+"&question="+ questionType+
                    "&customquest="+securityQuestion+"&answer="+ answer+"&hideid=0&cktime=31536000";
            URL loginUrl = new URL(HOST + LOGIN);
            URLConnection urlConnection = loginUrl.openConnection();
            urlConnection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded");

            urlConnection.setDoOutput(true);
            urlConnection.setDoInput(true);

            OutputStream outputStream = urlConnection.getOutputStream();
            InputStream inputStream = urlConnection.getInputStream();

            PrintWriter printWriter = new PrintWriter(outputStream);
            printWriter.write(URLEncoder.encode(data, "gbk"));
            outputStream.flush();

            // 定义BufferedReader输入流来读取URL的响应
            String result = "";
            BufferedReader bufferedReader = new BufferedReader(new InputStreamReader(inputStream, "gbk"));
            String line;
            while ((line = bufferedReader.readLine()) != null) {
                result += "/n" + line;
            }
            Map<String, List<String>> map = urlConnection.getHeaderFields();
            List<String> cookieList = map.get("Set-Cookie");
            CookieUtils.saveCookie(cookieList);

            Logger.getLogger("API").info(result);

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }

    public void getcodeImage() {
        try {
            Date date = new Date();
            long time = date.getTime();
            URL loginUrl = new URL(HOST + CODE + "?nowtime=" + time);
            URLConnection urlConnection = loginUrl.openConnection();
            urlConnection.setRequestProperty("Cookie", CookieUtils.getCookie());
            urlConnection.setRequestProperty("Accept", "image/webp,image/apng,image/*,*/*;q=0.8");

            urlConnection.setDoOutput(true);
            urlConnection.setDoInput(true);

            OutputStream outputStream = urlConnection.getOutputStream();
            InputStream inputStream = urlConnection.getInputStream();

            PrintWriter printWriter = new PrintWriter(outputStream);
            outputStream.flush();

            // 定义BufferedReader输入流来读取URL的响应
            FileOutputStream fileOutputStream = new FileOutputStream(new File("code.gif"));
            byte[] buffer = new byte[1024];
            int length = -1;
            while ((length = inputStream.read(buffer)) != 0) {
                fileOutputStream.write(buffer);
                fileOutputStream.flush();
            }

            fileOutputStream.close();
            Map<String, List<String>> map = urlConnection.getHeaderFields();
            List<String> cookieList = map.get("Set-Cookie");
            CookieUtils.saveCookie(cookieList);

        } catch (UnsupportedEncodingException e) {
            e.printStackTrace();
        } catch (MalformedURLException e) {
            e.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }

    }
}
