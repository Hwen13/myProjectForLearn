package com.zqkc.junit;

import static org.junit.Assert.*;

import org.junit.Before;
import org.junit.Test;

import com.zqkc.model.User;
import com.zqkc.service.impl.UserService;

public class UserServiceTest {

	@Before
	public void setUp() throws Exception {

	}

	@Test
	public void test() {
		UserService userService = new UserService();
		User user = new User();
		user.setAccount("1111");
		user.setPassword("1111");
		User f = userService.doLogin(user);
		assertEquals(1, f);

	}

}
