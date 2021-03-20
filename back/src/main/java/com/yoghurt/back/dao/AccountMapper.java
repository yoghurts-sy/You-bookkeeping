package com.yoghurt.back.dao;

import com.yoghurt.back.pojo.Account;
import org.apache.ibatis.annotations.Mapper;

import java.util.List;

@Mapper
public interface AccountMapper {
     List<Account> findAccountByUserid(String userid);
     void updateAccount(Account account);
}
