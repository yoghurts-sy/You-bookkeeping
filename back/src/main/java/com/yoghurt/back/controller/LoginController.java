package com.yoghurt.back.controller;

import com.yoghurt.back.pojo.CustomResult;
import com.yoghurt.back.utils.HttpUtils;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;


@RestController
public class LoginController {
    String APPID = "wx485a487e16cf3b44";
    String secret = "12cfe0a7a50b6b30529a4c3bec2fdcd1";

    @GetMapping("/api/login")
    public CustomResult Login(String code) throws IOException {
        System.out.println(code);
        //GET https://api.weixin.qq.com/sns/jscode2session ? appid=APPID & secret=SECRET & js_code=JSCODE & grant_type = authorization_code
        String urlHeader = "https://api.weixin.qq.com/sns/jscode2session";
        Map<String, String> params = new HashMap<>();
        params.put("appid", APPID);
        params.put("secret", secret);
        params.put("js_code", code);
        params.put("grant_type", "authorization_code");
        String urlResult = HttpUtils.getResponse(urlHeader, params);

        return new CustomResult(urlResult);
    }
}
