﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Vtys.Core.Business.Abstract;
using Vtys.Core.Results;
using Vtys.Homework.Entities.Concrete;

namespace Vtys.Homework.Business.Abstract
{
    public interface IUserRoleService : IService
    {
        IResult GetAll();
        IResult GetById(long id);
        IResult Save(UserRole userRole);
        IResult DeleteById(long id);
    }
}
