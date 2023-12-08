﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vtys.Core.Aspects;
using Vtys.Core.Business.Concrete;
using Vtys.Core.Results;
using Vtys.Homework.Business.Abstract;
using Vtys.Homework.Entities.Concrete;

namespace Vtys.Homework.Business.Concrete
{
    public class TaskSourceManager : Manager, ITaskSourceService
    {
        [ExceptionResultAspect]
        public IResult GetAll()
        {
            var taskSource = Repository.GetList<TaskSource>();
            return new SuccessResult("", taskSource);
        }
    }
}