package com.yoghurt.back.service.Impl;

import com.yoghurt.back.dao.AccountMapper;
import com.yoghurt.back.pojo.Account;
import com.yoghurt.back.pojo.CustomResult;
import com.yoghurt.back.service.myService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

@Service
public class myServiceImpl implements myService {
    @Autowired
    private AccountMapper accountMapper;

    @Override
    public List<Account> findAccountByUserid(String userid) {
        return accountMapper.findAccountByUserid(userid);
    }

    @Transactional
    @Override
    public CustomResult updateAccount(Account account) {
        accountMapper.updateAccount(account);
        return new CustomResult("ok");
    }
}
