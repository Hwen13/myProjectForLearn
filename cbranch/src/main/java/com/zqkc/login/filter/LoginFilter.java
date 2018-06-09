package com.zqkc.login.filter;

import java.util.LinkedHashMap;
import java.util.Map;

/**
 * 防止用户重复登录模块
 * 
 * @author 折翼天蝎
 *
 */
public class LoginFilter {
	/**
	 * 定义登录用户帐号缓存变量loginSession session ID作为key值 用户帐号作为value值
	 */
	public static Map<String, LoginUser> loginSession = new LinkedHashMap<String, LoginUser>();

	/**
	 * 判断用户是否已登录 已登录返回false 否则返回true
	 * 
	 * @param sessionId
	 * @param account
	 * @param loginIp
	 * @return
	 */
	public static boolean pushUser(String sessionId, String account, String loginIp) {
		System.out.println("pushUser---------===========starts");
		boolean flag = false;
		LoginUser onlineUser = new LoginUser(sessionId, account, loginIp);
		if (containsUser(onlineUser)) {// 如果已经包含在内则返回false不允许登录
			flag = false;
		} else {// 否则，压入loginSession中，返回true允许登录
			loginSession.put(onlineUser.getSessionId(), onlineUser);
			flag = true;
		}
		System.out.println("pushUser---------======flag====" + flag);
		System.out.println("pushUser---------===========starts");
		return flag;

	}

	/**
	 * 用户退出或session失效时删除对应用户帐号
	 * 
	 * @param key用户的帐号
	 * @throws Exception
	 */
	public static void rmUserByKey(String key) {
		if (loginSession.containsKey(key)) {
			loginSession.remove(key);
		}
	}

	/**
	 * 检查该用户帐号是否已经包含在 loginSession中 如果包含返回true 否则返回false
	 * 
	 * @param account
	 * @return
	 * @throws Exception
	 */
	public static boolean containsUser(LoginUser onlineUser) {
		boolean flag = false;
		if (!loginSession.isEmpty()) {
			for (Map.Entry<String, LoginUser> user : loginSession.entrySet()) {
				if (user.getValue().equals(onlineUser)) {
					flag = true;
					break;
				}
			}
		}
		return flag;
	}

	/*
	 * public static void list(){ System.out.println("在线用户："+loginSession); }
	 */

}
