package cn.itxynet.OrderingMgr.settings.service.impl;

import cn.itxynet.OrderingMgr.settings.dao.Sys_usersDao;
import cn.itxynet.OrderingMgr.settings.service.Sys_usersService;
import cn.itxynet.OrderingMgr.utils.SqlSessionUtil;

public class Sys_usersServiceImpl implements Sys_usersService {
    private Sys_usersDao sysUsersDao = SqlSessionUtil.getSqlSession().getMapper(Sys_usersDao.class);


}
