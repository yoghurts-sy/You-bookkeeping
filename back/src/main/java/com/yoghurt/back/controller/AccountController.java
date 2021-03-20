package com.yoghurt.back.controller;

import com.yoghurt.back.pojo.Account;
import com.yoghurt.back.pojo.CustomResult;
import com.yoghurt.back.service.myService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/account")
public class AccountController {
    @Autowired
    private myService myService;
    /*AccountService accountService;*/

    @GetMapping("/all")
    public List<Account> findAccountByUserid(String userid) {
        System.out.println("----->" + userid);
        return myService.findAccountByUserid(userid);
    }

    @PostMapping("/add")
    public CustomResult updateAccount(@RequestBody Account account) {
        System.out.println(account);
        myService.updateAccount(account);
        return new CustomResult("ok");
    }
    /*public CustomResult addRecord(@RequestBody Account requestAccount) {
        myService.updateRecord(requestAccount);
        return new CustomResult("ok");
    }*/
}
