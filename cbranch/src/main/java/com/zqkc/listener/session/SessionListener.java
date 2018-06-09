package com.zqkc.listener.session;

import javax.servlet.ServletContext;
import javax.servlet.http.HttpSessionEvent;
import javax.servlet.http.HttpSessionListener;

import com.sun.xml.internal.bind.v2.runtime.output.StAXExStreamWriterOutput;
import com.zqkc.login.filter.LoginFilter;

public class SessionListener implements HttpSessionListener {
	/* Session创建事件 */
	public void sessionCreated(HttpSessionEvent event) {
		System.out.println("sessionCreated*********starts===" + event.toString());
		ServletContext ctx = event.getSession().getServletContext(); // 获取session
		Integer numSessions = (Integer) ctx.getAttribute("numSessions"); // 获取统计数据
		System.out.println("ctx----------=======" + ctx);
		System.out.println("numSessions----------=======" + numSessions);
		if (numSessions == null) {
			numSessions = new Integer(1); // 如果为空初始化1
		} else {
			// 不为空，则往下加1
			int count = numSessions.intValue();
			numSessions = new Integer(count + 1);
		}
		ctx.setAttribute("numSessions", numSessions);
	}

	/* Session失效事件 */
	public void sessionDestroyed(HttpSessionEvent se) {
		System.out.println("sessionDestroyed--------========starts");
		ServletContext ctx = se.getSession().getServletContext();

		Integer numSessions = (Integer) ctx.getAttribute("numSessions");

		if (numSessions == null) {

			numSessions = new Integer(0);

		} else {

			int count = numSessions.intValue();
			numSessions = new Integer(count - 1);

		}
		// 对应的清除用户登录缓存模块的信息
		LoginFilter.rmUserByKey(se.getSession().getId());

		ctx.setAttribute("numSessions", numSessions);

	}
}
