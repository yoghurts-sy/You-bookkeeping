package com.yoghurt.back.service;

import com.yoghurt.back.pojo.Account;
import com.yoghurt.back.pojo.CustomResult;

import java.util.List;

public interface myService {

    /**
     *
     * @param userid
     * @return
     */
    List<Account> findAccountByUserid(String userid);


    /**
     *
     * @param account
     * @return
     */
    CustomResult updateAccount(Account account);
}
