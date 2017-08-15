package test;

import api.ApiUtils;
import org.junit.Test;

/**
 * Created by jin on 2017/8/15.
 */
public class LoginTest {
    @Test
    public void login() {
        ApiUtils apiUtils = new ApiUtils();
        apiUtils.login("不是兔子", "123465a", "-1", "", "", "");

    }

    @Test
    public void getCodePic() {
        ApiUtils apiUtils = new ApiUtils();
        apiUtils.getcodeImage();
    }
}
