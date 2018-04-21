package com.zqkc.log.aspect;

import java.util.Arrays;
import java.util.List;

import org.aspectj.lang.JoinPoint;
import org.aspectj.lang.annotation.After;
import org.aspectj.lang.annotation.AfterReturning;
import org.aspectj.lang.annotation.AfterThrowing;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Before;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

import com.zqkc.dao.ILogsDao;
import com.zqkc.model.Logs;

/**
 * 日志切面
 * 
 * @author 折翼天蝎
 *
 */
@Order(1)
@Component
@Aspect
public class AspectLogger {

	@Autowired
	protected ILogsDao logDao;

	public void setLogDao(ILogsDao logDao) {
		this.logDao = logDao;
	}

	private Logs log = new Logs();
	private long date1;
	private long date2;

	/**
	 * 声明切入点表达式，一般在该方法中不再添加其他代码。 使用@Pointcut来声明切入点表达式。 后面的通知直接使用方法名来引用当前的切入点表达式。
	 */
	@Pointcut("execution(* com.zqkc.controller.*.*(..))")
	public void declareJoinPointExpression() {
	}

	/**
	 * 前置通知，在目标方法开始之前执行。 @Before("execution(public int
	 * com.spring.aop.impl.ArithmeticCalculator.add(int, int))")这样写可以指定特定的方法。
	 * 
	 * @param joinpoint
	 */
	@Before("declareJoinPointExpression()")
	// 这里使用切入点表达式即可。后面的可以都改成切入点表达式。如果这个切入点表达式在别的包中，在前面加上包名和类名即可。
	public void beforeMethod(JoinPoint joinpoint) {
		System.out.println("beforeMethod-----==========starts");
		date1 = System.currentTimeMillis();

		String controller = joinpoint.getSignature().getClass().getName();
		String methodName = joinpoint.getSignature().getName();
		List<Object> args = Arrays.asList(joinpoint.getArgs());
		log.setController(controller);
		log.setAction(methodName);
		log.setParams(args.isEmpty() == true ? "null" : args.toString());
		System.out.println("date1========" + date1);
		System.out.println("controller========" + controller);
		System.out.println("methodName========" + methodName);
		System.out.println("beforeMethod-----==========end");
	}

	/**
	 * 后置通知，在目标方法执行之后开始执行，无论目标方法是否抛出异常。 在后置通知中不能访问目标方法执行的结果。
	 * 
	 * @param joinpoint
	 */
	@After("execution(* com.zqkc.controller.*.*(..))")
	public void afterMethod(JoinPoint joinpoint) {
		System.out.println("afterMethod-----==========starts");
		// String methodName = joinpoint.getSignature().getName();
		// List<Object>args = Arrays.asList(joinpoint.getArgs()); 后置通知方法中可以获取到参数
		log.setStatus((byte) 0);
		System.out.println("afterMethod-----==========end");
	}

	/**
	 * 返回通知，在方法正常结束之后执行。 可以访问到方法的返回值。
	 * 
	 * @param joinpoint
	 * @param result
	 *            目标方法的返回值
	 */
	@AfterReturning(value = "execution(* com.zqkc.controller.*.*(..))", returning = "result")
	public void afterReturnning(JoinPoint joinpoint, Object result) {
		System.out.println("afterReturnning-----starts");
		date2 = System.currentTimeMillis();
		// String methodName = joinpoint.getSignature().getName();
		long d = date2 - date1;
		System.out.println("d==========" + d);
		System.out.println("result=========="+result);
		log.setResult(result.toString());
		log.setConsuming(String.valueOf(d));
		logDao.save(log);
		System.out.println("afterReturnning-----end");
	}

	/**
	 * 异常通知。目标方法出现异常的时候执行，可以访问到异常对象，可以指定在出现特定异常时才执行。
	 * 假如把参数写成NullPointerException则只在出现空指针异常的时候执行。
	 * 
	 * @param joinpoint
	 * @param e
	 */
	@AfterThrowing(value = "execution(* com.zqkc.controller.*.*(..))", throwing = "e")
	public void afterThrowing(JoinPoint joinpoint, Exception e) {
		// String methodName = joinpoint.getSignature().getName();
		System.out.println("afterThrowing-----starts");
		log.setStatus((byte) 1);
		log.setResult(e.toString());
		logDao.save(log);
		System.out.println("afterThrowing-----end");
	}

}
